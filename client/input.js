Template.footer.events({
    'keydown input': function(event) {
        if (event.keyCode == 13) {
            var text = event.target.value;
            Messages.insert({text: text});
            event.target.value = '';

            return false;
        }
    }
});