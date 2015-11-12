if (meteor.isClient) {
    Template.body.helpers({
        tasks: [
                { text: "This is Task 1"},
                { text: "This is Task 2"},
                { text: "This is Task 3"}
            ]
    });
} 