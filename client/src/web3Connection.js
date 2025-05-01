import Web3 from 'web3';

const web3Connection = async () => {
    let web3;
    /* typeof window.ethereum !== 'undefined' ?
        web3 = new Web3(window.ethereum) :
        typeof window.web3 !== 'undefined' ?
            web3 = window.web3 :
            web3 = new Web3('http://localhost:7545');
 */
            if(typeof window.ethereum !== 'undefined'){
                web3 = new Web3(window.ethereum);
                try{

                    window.ethereum.request({ method: 'eth_requestAccounts' }).then( (address:any) => {
                        console.log("Account connected:",address[0]);;
                        
                    });
                }
            catch (error) {
            }

    /* if(typeof window.ethereum !== 'undefined'){
        try {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then({address:any} => {
            console.log("Account connected":",address[0]);;
            
        });
     } catch (error) {
            console.error("Error connecting to account:");
        }
    } */
}
    return web3;

}

export default web3Connection;