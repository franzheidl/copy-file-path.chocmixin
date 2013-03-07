Hooks.addMenuItem("Edit/Copy File Path", "ctrl-cmd-p", function() {
    if (!Document.current()) {
        Alert.show("Oops!", "There must be an open file to copy the path from.", ["OK, got it."]);
        return;
    }
    if (!Document.current().isUntitled()) {
        Alert.show("Oops!", "There is no path to copy yet. Save your document first.", ["OK, promised."]);
        return;
    }
    var currentFilePath = (Document.current()).path();
    Clipboard.copy(currentFilePath);
});
