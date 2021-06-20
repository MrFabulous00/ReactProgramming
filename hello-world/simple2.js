function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? "좋아요 취소" : "좋아요";
    return React.createElement(
        "button",
        { onClick: () => setLiked(!liked) },
        text
    );
}

//Bad
// const domContainer1 = document.querySelector("#react-root1");
// ReactDOM.render(React.createElement(LikeButton), domContainer1);

// const domContainer2 = document.querySelector("#react-root2");
// ReactDOM.render(React.createElement(LikeButton), domContainer2);

// const domContainer3 = document.querySelector("#react-root3");
// ReactDOM.render(React.createElement(LikeButton), domContainer3);

//Good
const domContainer = document.querySelector("#root");
ReactDOM.render(
    React.createElement(
        "div",
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton)
    ),
    domContainer
);
