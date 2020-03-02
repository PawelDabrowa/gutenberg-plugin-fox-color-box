//edit
{/* <div>
  <h3>Fox Cool Border Box</h3>
  <input type="text" value={props.attributes.content} onChange={updateContent}/>
  <wp.components.ColorPicker color={props.attributes.color} onChangeComplete={updateColor} />
</div> */}

//save
{/* <h3 style={{border: `5px solid ${props.attributes.color}`}}>
{props.attributes.content}</h3> */}

wp.blocks.registerBlockType('fox/border-box', {
    title: 'Fox cool border box',
    category: 'common',
    icon: 'smiley',
    attributes: {
        content: { type: 'string' },
        color: { type: 'string' },
    },
    edit: function (props) {
        function updateContent(event) {
            props.setAttributes({ content: event.target.value })
        }

        function updateColor(value) {
            props.setAttributes({ color: value.hex })
        }

        return React.createElement("div", null, React.createElement("h3", null, "Fox Cool Border Box"), React.createElement("input", {
            type: "text",
            value: props.attributes.content,
            onChange: updateContent
        }), React.createElement(wp.components.ColorPicker, {
            color: props.attributes.color,
            onChangeComplete: updateColor
        }));
    },
    save: function (props) {
        return React.createElement("h3", {
            style: {
                border: "5px solid ".concat(props.attributes.color)
            }
        }, props.attributes.content);
    }
})