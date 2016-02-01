// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
app.Wiki = Backbone.Model.extend({
    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
        id: "",
        name: ""
    }    
});
