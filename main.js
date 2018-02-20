/* jshint esversion: 6 */

setup_menu();
KFC.startTime = new Date().getTime();
KFC.menuPrint("KFC Version 0.1: Loading...");
setTimeout(function() {
    setup();
    KFC.menuPrint(`Loaded KFC in ${(new Date().getTime()) - KFC.startTime}ms`);
}, 0);
