import Realm from 'realm';
type GlobalDataProp = {
    token: string | null
}




const GlobalData: GlobalDataProp = { token: null };

export default GlobalData;