

var React = require("react");

var Main = React.createClass({

    getInitialState: function() {
        return {
            apiResults: [],
            mongoResults: [],
            searchTerms: ["", "", ""]
        };
    }
})