import { STORE_DATA } from "../constant/constant";

export const storeReducer = (
    state = { data: [] },
    action
) => {
    switch (action.type) {

        case STORE_DATA:

            const formData = action.payload;
            console.log(action)
            return {
                data: formData
            }




        default:
            return state;
    }
};
export default storeReducer