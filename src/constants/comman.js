/**
 * Common Constants
 *
 * @package                Fellower
 * @subpackage             Common Constants
 * @category               Constants
 * @DateOfCreation         13 Mar 2019
 * @ShortDescription       This is responsible for common constants
 */

const commanConstants = {
    ROLE : {
        ADMIN : 1,
        SUPPLIER : 2,
        SALESPERSON : 3,
        CUSTOMER : 4
    },
    IS_DELETED_YES : "1",
    IS_DELETED_NO : "2",
    PERMISSIONS : {
        CUSTOMER_LIST : 1,
        CREATE_ITEM : 2,
        GET_ITEM_DETAIL : 3,
        DELETE_ITEM : 4
    },
};

module.exports = commanConstants;
