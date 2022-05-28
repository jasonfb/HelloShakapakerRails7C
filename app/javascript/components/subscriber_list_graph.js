// import React from "react";
// import * as moment from "moment";
//
// import PropTypes from "prop-types";
// import styled from "styled-components"
//
// import PieChart from "./chartast/pie_chart"
//
//
// const StyledSubcriberListGraph = styled.div`
//
// display: flex;
// flex-direction: column;
//
// [data-name='temperature-breakdown'] {
//
//    float: left;
//    div.pie-chart {
//       width: 30%;
//    }
//
// }
//
//
// `
//
//
// class SubscriberListGraph extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: {}
//     }
//     this.resetDataAndRender();
//   }
//
//   resetDataAndRender() {
//     const csrfToken = document.querySelector("[name='csrf-token']").content
//     let enc_data = {}
//     fetch('//' + VERSO._api_host + '/api/internal/crusades/' + VERSO._crusade_id +  '/subscriber_stats/' , {
//       method: 'POST',
//       headers: {
//         "X-CSRF-Token": csrfToken,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(enc_data)
//     }).then(response => response.json())
//       .then(data => {
//         this.setState({data: data})
//       })
//     this.render()
//   }
//
//   render () {
//
//     const {all_by_status, all_by_temp,
//       hot_by_status, cold_by_status, warm_by_status,
//     frost_by_status} = this.state.data
//     return (
//       <StyledSubcriberListGraph>
//
//       <em>Your subscribers on this crusade as of today.</em>
//         <br />
//       <strong>
//         {  (all_by_status) ? `Total estimated outgoing emails per month: ${ all_by_status.crusade_total_estim_per_month}/month` : ""}
//       </strong>
//
//
//       <hr />
//         <PieChart title={"By Current Subsciption Status"} data={all_by_status} />
//       <hr />
//         <PieChart title={"By Temperature"} data={all_by_temp} />
//
//         <br/>
//         <hr />
//
//         <PieChart title={"Hot By Status"} data={hot_by_status} />
//         <PieChart title={"Warm By Status"} data={warm_by_status} />
//         <PieChart title={"Cold By Status"} data={cold_by_status} />
//         <PieChart title={"Frost By Status"} data={frost_by_status} />
//
//     </StyledSubcriberListGraph>)
//   }
//
//
//
// }
//
//
// export default SubscriberListGraph;