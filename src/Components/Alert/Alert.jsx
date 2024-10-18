import "./AlertStyle.css";

function Alert() {
  /*  function openDialog(status) {
    var el = document.querySelector(`#${status}`);
    console.log(el);
    el.classList.remove("container_alert_close");
    el.classList.add("container_alert_open");
  }
  function closeDialog(status) {
    var el = document.querySelector(`#${status}`);
    console.log(el);
    el.classList.remove("container_alert_open");
    el.classList.add("container_alert_close");
  }
  function stopPropagation(event) {
    event.stopPropagation(); } */

  return (
    <>
      <div
        className="container_alert container_alert_open"
        id="container_alert1"
        onclick={closeDialog(container_alert1)}
      >
        <div className="content_alert" onclick={stopPropagation(event)}>
          <div className="card" style="">
            <div className="card_title">Título</div>
            <div className="card_text"></div>
            <div className="card_section">
              <button
                className="btn btn_small btn_secondary_lighten"
                onclick={closeDialog(container_alert1)}
              >
                <span> Cerrar </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content-btn">
        <button onclick={openDialog(container_alert1)} className="btn">
          <span>open</span>
        </button>
      </div>
    </>
  );
}
export default alert;
