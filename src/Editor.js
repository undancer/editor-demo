import React, {Component} from "react";
import PropTypes from 'prop-types'
import CodeMirror from 'codemirror'
import "codemirror/lib/codemirror.css";


class Editor extends Component {

    static propTypes = {
        onChange: PropTypes.func
    };

    componentDidMount() {
        var editor = this.refs.editor;
        if (!editor.getAttribute) {

        }
        var options = {
            lineNumbers: true
        };
        this.editor = CodeMirror.fromTextArea(editor, options);
        this.editor.on('change', this.handleChange);
    }

    handleChange = () => {
        if (this.editor) {
            var value = this.editor.getValue();
            if (this.props.onChange) {
                this.props.onChange({target: {value: value}})
            }
            console.log("editor change value: " + value);
        }
    };

    render() {
        var value = "*value*";
        return (
            <div className="Editor">
                <textarea ref="editor" defaultValue={value} onChange={this.props.onChange}></textarea>
            </div>
        )
    }
}

export default Editor