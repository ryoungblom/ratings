pragma solidity ^0.4.18;

contract AnalystRegistry {
    uint32 constant REPUTATION_LEAD = 12;
  
    struct Analyst {
        //string firstname;
        bytes32 name;
        bytes32 password;
        bytes32 email;
        uint32 auth_status;  // user authentication status
        address user_addr;
        uint16 scheduled_round;
        uint16 active_round;
        bool is_lead;
        // Round.status public round_status;
        //address public past_rounds;
        uint32 reputation;
        uint32 token_balance;
        uint16 num_rounds;
        mapping ( uint16 => uint16 ) rounds;
    }
    mapping (uint32 => Analyst) analysts;
    mapping (address => uint32) address_lookup;
    mapping (bytes32 => uint32) name_lookup;
    uint32 public num_analysts; 
    
    mapping (uint32 => uint32) leads;
    uint32 public num_leads;
  
    function AnalystRegistry() public {
        bootstrap(12,4);
    }
    
    event Register(uint32 id, bytes32 name, bytes32 email);
    function register(bytes32 _name, bytes32 _pw, bytes32 _email ) public {
        analysts[ num_analysts ] = Analyst( 
            _name, 
            _pw, 
            _email, 
            0, 
            msg.sender, 
            0, 
            0, 
            false, 
            0, 
            0, 
            0 
        );
        address_lookup[ msg.sender ] = num_analysts;
        name_lookup[ _name ] = num_analysts;
        Register( num_analysts++, _name, _email );
    }
  
    function login(bytes32 _name, bytes32 _pw) public view returns (uint32, bytes32, uint32, uint32) {
        uint32 id = name_lookup[ _name ];
        Analyst storage analyst = analysts[id];
        require(analyst.password == _pw);
        return (id,analyst.email,analyst.reputation,analyst.token_balance);
    }
    
    function loginByAddress(bytes32 _password, address force) public view returns ( uint32 id ) { // force is for testing, so can login with another address
        id = address_lookup[ force == 0 ? msg.sender : force ];
        require(analysts[id].password == _password);
    }

    function getAnalyst( address _user ) public constant returns (uint32 id) {
        id = address_lookup[_user];
    }
    
    function getAddress( uint32 _analystid ) public constant returns (address) { // sequential ids
        return analysts[_analystid].user_addr;
    }
  
    function increaseReputation( uint32 _analystId, uint32 _reputationPoints) public {
        analysts[_analystId].reputation += _reputationPoints;
        if (!analysts[_analystId].is_lead && analysts[_analystId].reputation >= REPUTATION_LEAD){
            analysts[_analystId].is_lead = true; // promotion
            leads[num_leads++] = _analystId;
        }
    }
  
    function isLead( uint32 _analystId ) public view returns (bool){
        return( analysts[ _analystId ].reputation >= REPUTATION_LEAD );
    }

    function analystInfo( uint32 _analystId ) public view returns (uint32, bytes32, bytes32, uint32, uint32, bool, uint32, uint16, uint16, uint16 ) {
        Analyst storage a = analysts[_analystId];
        return (_analystId, a.name, a.password, a.auth_status, a.reputation, a.is_lead, a.token_balance, a.scheduled_round, a.active_round, a.num_rounds );
    }
    function addRound( uint32 _analystId, uint16 _roundId )  public {
        Analyst storage a = analysts[ _analystId ];
        a.rounds[ a.num_rounds++ ] = _roundId;
    }
    
    function setActiveRound( uint32 _analystId, uint16 _roundId ) public {
        analysts[ _analystId ].active_round = _roundId;
    }
    
    // round adds to analyst rounds list
    function roundParticipant( uint32 _analystId, uint16 _roundId ) public {  
        Analyst storage a = analysts[ _analystId ];
        a.scheduled_round = _roundId;
        a.rounds[a.num_rounds++] = _roundId;
    }

    // create some analysts
    function bootstrap(uint32 _numanalysts,uint32 _numleads) public {
        uint32 new_analysts = _numanalysts == 0 ? 12 : _numanalysts;
        uint32 new_leads = _numleads == 0 ? 2 : _numleads;
        uint32 start = num_analysts;
        uint32 finish = num_analysts+new_analysts;
        bytes32 basename = 'alan'; // alan1
        bytes32 emailbase = 'alan_@veva.one';
        uint32 startat = 0x30;  // '0'
        for ( uint32 i = start; i < finish; i++ ) {
            bytes32 appendname = bytes32(i+startat);
            bytes32 name = (appendname << 216) | basename;
            bytes32 email = emailbase;
            register(name,'veva',email); // make up phony name based on id
            if (new_leads > 0) {
                increaseReputation( i, REPUTATION_LEAD);
                new_leads--;
            }
        }
    }
}
