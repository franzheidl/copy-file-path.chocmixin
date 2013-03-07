Hooks.addMenuItem("Edit/Copy File Path", "ctrl-cmd-p", function() {
    if (!Document.current()) {
        Alert.show("Oops!", "There must be an open file to copy the path from.", ["OK, got it."]);
        return;
    }
    if (!Document.current().path()) {
        Alert.show("Oops!", "There is no path to copy yet. Save your document first.", ["OK, promised."]);
        return;
    }
    Clipboard.copy((Document.current()).path());
});
