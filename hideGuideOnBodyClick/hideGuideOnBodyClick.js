pendo.dom(document).on('click', 'body', function hideGuide(e) {
    if (
        !dom(eventTarget(e)).closest('#pendo-guide-container').length
    ) {
        pendo.onGuideDismissed();
    }
});
​
function eventTarget (e) {
    return (e && e.target) || e.srcElement;
}
