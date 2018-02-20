/* jshint esversion: 6 */
/* jshint -W014 */

/**
 * Takes care of all customization that can happen in the main menu before the
 * game starts.
 */
function setup() {
    setup_gas_info();
}

/**
 * Customizes the main menu to hide ads and display info from KFC itself.
 * Note that this has to be called before the main setup, and shouldn't do
 * anything blocking or async.
 */
function setup_menu() {
    var [column, text, ad] =
        KFCComponentRegistry.getElems(
            KFCComponent.MENU_LEFT_COLUMN,
            KFCComponent.MENU_LEFT_COLUMN_TEXT,
            KFCComponent.MENU_LEFT_COLUMN_AD);

    text.innerHTML = '';
    text.style.textAlign = 'left';
    text.style.padding = '0px';
    text.style.margin = '20px';
    text.style.display = 'inherit';
    column.style.height = '275px';
    column.removeChild(ad);

    KFC.menuPrint = function (msg) {
        var span = document.createElement('span');
        span.style.marginTop = '0px';
        span.innerHTML = msg;
        text.appendChild(span);
    };
}


/**
 * Customizes the gas info pane to make it bigger and a better indicator of how
 * soon the gas is coming.
 */
function setup_gas_info() {
    var [container, icon, text] =
        KFCComponentRegistry.getElems(
            KFCComponent.GAS_INFO_CONTAINER,
            KFCComponent.GAS_INFO_ICON,
            KFCComponent.GAS_INFO_TEXT);

    container.removeChild(icon);
    container.style.width = '70px';
    container.style.left = '97px';
    container.style.bottom = '237px';
    container.style.transform = 'scale(2)';
    text.style.display = 'inherit';
    text.style.bottom = '-5px';
    text.style.left = '0px';

    // Dynamically change the size and color of the timer to indicate status
    setInterval(function () {
        // Maintain max size and let CSS assign color if the zone is closing
        if (container.className.indexOf("icon-pulse") > -1) {
            return;
        }

        var time_left =
            text.innerHTML.startsWith("0:")
                ? parseFloat(text.innerHTML.replace("0:", ""))
                : 60.0;
        var urgency = 1.0 - (time_left / 60.0);

        container.style.bottom = `${Math.round(217 + 20 * urgency)}px`;
        container.style.transform = `scale(${(1 + urgency)})`;
        container.style.background =
            `rgba(${Math.round(urgency*255)}, 0, 0, ${0.4 + 0.4 * urgency})`;
    }, 150);
}
