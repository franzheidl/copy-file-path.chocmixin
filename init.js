Hooks.addMenuItem("Edit/Copy File Path", "ctrl-cmd-p", function() {
    if (!Document.current() || !Document.current().path()) {
        Alert.show("Oops!", "There must be an open file to copy the path from.", ["Got it."]);
        return;
    }
    var currentFilePath = (Document.current()).path();
    Clipboard.copy(currentFilePath);
});
