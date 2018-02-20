/* jshint esversion: 6 */

// A namespace for functions that should be globally accessible
KFC = {};

KFCComponent = {
    GAS_INFO_CONTAINER : 'gas_info_container',
    GAS_INFO_ICON : 'gas_info_icon',
    GAS_INFO_TEXT : 'gas_info_text',
    MENU_LEFT_COLUMN : 'menu_left_column',
    MENU_LEFT_COLUMN_TEXT : 'menu_left_column_text',
    MENU_LEFT_COLUMN_AD : 'menu_left_column_ad',
};

KFCComponentMap = {};

// Main menu UI
KFCComponentMap[KFCComponent.MENU_LEFT_COLUMN] = "ad-block-left";
KFCComponentMap[KFCComponent.MENU_LEFT_COLUMN_TEXT] = "main-med-rect-blocked";
KFCComponentMap[KFCComponent.MENU_LEFT_COLUMN_AD] = "ad-block-main-med-rect";

// Map UI
KFCComponentMap[KFCComponent.GAS_INFO_CONTAINER] =  "ui-map-info";
KFCComponentMap[KFCComponent.GAS_INFO_ICON] = "ui-gas-icon";
KFCComponentMap[KFCComponent.GAS_INFO_TEXT] = "ui-gas-timer";

class KFCComponentRegistry {
    static getElems() {
        var elems = [];

        Array.from(arguments).forEach(function(component) {
            var id = KFCComponentMap[component];
            if (id === undefined || component === undefined) {
                throw new Error(`Invalid component: ${component}!`);
            }

            elems.push(document.getElementById(id));
        });

        return elems;
    }
}
