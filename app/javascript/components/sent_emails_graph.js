// import React from "react";
// import * as moment from "moment";
// import LineChart from './chartast/line_chart'
//
// import PropTypes from "prop-types";
//
//
//
//
// class SentEmailsGraph extends React.Component {
//   constructor() {
//     super();
//     // this.state = {
//     //   searchStartDate: moment().subtract(60, 'days').format("YYYY-MM-DD"),
//     //   searchEndDate: moment().format("YYYY-MM-DD"),
//     //   increment: 'days',
//     //   data: {}
//     // }
//     //
//     // this.resetDataAndRender = this.resetDataAndRender.bind(this)
//     // this.changeIncrements = this.changeIncrements.bind(this)
//     // this.goBack = this.goBack.bind(this)
//     // this.goForward = this.goForward.bind(this)
//     // this.changeStartDate = this.changeStartDate.bind(this)
//     // this.changeEndDate = this.changeEndDate.bind(this)
//     //
//     // this.resetDataAndRender();
//   }
//   changeIncrements(newIncrement) {
//     this.setState({'increment': newIncrement}, () => { this.resetDataAndRender() })
//   }
//   changeStartDate(event) {
//     this.setState({'searchStartDate': event.currentTarget.value}, () => { this.resetDataAndRender() })
//   }
//   changeEndDate(event) {
//     this.setState({'searchEndDate': event.currentTarget.value}, () => { this.resetDataAndRender() })
//   }
//
//   goBack() {
//     const newStartDate = moment(this.state.searchStartDate).subtract(1, this.state.increment)
//     const newEndDate = moment(this.state.searchEndDate).subtract(1, this.state.increment)
//     this.setState({
//       searchStartDate: newStartDate.format("YYYY-MM-DD"),
//       searchEndDate: newEndDate.format("YYYY-MM-DD"),
//     }, () => { this.render(); this.resetDataAndRender() })
//   }
//
//   goForward() {
//     const newStartDate = moment(this.state.searchStartDate).add(1, this.state.increment)
//     const newEndDate = moment(this.state.searchEndDate).add(1, this.state.increment)
//     this.setState({
//       searchStartDate: newStartDate.format("YYYY-MM-DD"),
//       searchEndDate: newEndDate.format("YYYY-MM-DD"),
//     }, () => { this.resetDataAndRender() })
//   }
//
//   resetDataAndRender() {
//     const csrfToken = document.querySelector("[name='csrf-token']").content
//     const {increment, searchStartDate, searchEndDate } = this.state
//
//     const data  = {
//       _method: "patch",
//       search_parameters: {
//         "increment": increment,
//         "searchStartDate": searchStartDate,
//         "searchEndDate": searchEndDate
//       }
//     }
//     fetch('//' + VERSO._api_host + '/api/internal/crusades/' + VERSO._crusade_id +  '/email_sent_stats/' , {
//       method: 'POST',
//       headers: {
//         "X-CSRF-Token": csrfToken,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     }).then(response => response.json())
//       .then(data => {
//         this.setState({data: data})
//     })
//   }
//
//
//   render () {
//     const {increment, data} = this.state
//
//     return (
//       <div className={"stats-dashboard"}>
//         <h1>Emails Sent, Opened, Read</h1>
//
//         <div>
//           Search Start Date:
//           <input type="date" defaultValue={this.state.searchStartDate} onChange={this.changeStartDate}/>
//
//           Search End Date:
//           <input type="date" defaultValue={this.state.searchEndDate}  onChange={this.changeEndDate}/>
//
//
//           <i className={"fa fa-arrow-left"} onClick={this.goBack}/>
//           &nbsp;
//           <i className={"fa fa-arrow-right"} onClick={this.goForward} />
//
//           Show by:
//           <button type="button" onClick={(event) => {  this.changeIncrements('months') }} className={"btn  " + (increment === 'months' ? 'btn-info' : '')}>Month</button>
//           <button type="button" onClick={(event) => {  this.changeIncrements('weeks') }} className={"btn  " + (increment === 'weeks' ? 'btn-info' : '')}>Week</button>
//           <button type="button" onClick={(event) => {  this.changeIncrements('days') }} className={"btn  " + (increment === 'days' ? 'btn-info' : '')}>Day</button>
//
//         </div>
//         <LineChart data={data} />
//         <div>
//         </div>
//
//       </div>
//     );
//   }
// }
//
// SentEmailsGraph.propTypes = {
//   searchStartDate: PropTypes.node,
//   searchEndDate: PropTypes.node,
//   results: PropTypes.string
// };
//
//
// export default SentEmailsGraph;
