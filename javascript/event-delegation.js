// Event Delegation =>
/* on an E-commerce site with bunch of products listed on it and we want to perform a click event
    on a particular product so we will not add the add listener to all of the product as it takes memory
    so what eventDelegation does is we provide the event listener to the parent and access the child element with
    the help of that event.*/

document.querySelector("#products").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    window.location.href += "#" + event.target.id;
  }
});

// Event Delegation in React
const EventDelegation = () => {
  const eventHandler = (event) => {
    console.log(event.target);
    window.location.href += "#" + event.target.id;
  };
  return (
    <table onClick={eventHandler}>
      <tr>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>4</td>
      </tr>
      <tr>
        <td>5</td>
        <td>62</td>
      </tr>
    </table>
  );
};
