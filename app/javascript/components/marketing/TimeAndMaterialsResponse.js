import React from 'react'


const TimeAndMaterialsResponse = (props) => {
  return (
    <div className={"text-left container"}>
      <div className={"row"}>

        <div className={"col-md-12"}>
          <h2 data-aos-delay="100" data-aos="zoom-in">The Scrum Process</h2>

          <h4 className={"magic"} data-aos-delay="200" data-aos="zoom-in">
            In software development, you can choose <strong>two</strong> of three levers: time, quality, scope.
          </h4>

          <p data-aos-delay="300" data-aos="zoom-in">
            For this reason, we always try to <strong>control the scope</strong> and <strong>don't focus on the time
            and quality</strong>. (That's because we <em>always</em> want excellent quality and so scope is the only other lever we should manipulate.)
            We do this by breaking down the work into short, iterative steps called stories. But you want to know how
            much it's gonna cost? <strong>Of course you want to know how much it will cost.</strong> Since we can't know
            everything up-front, the process involves making a "best guess" estimate at the start and then re-estimating
            stories as scope grows or items are executed on.

            Over time, the team gets more accurate at estimation and creates a <strong>reliable velocity
            measurement</strong>. Then, we have a measure to reasonably predict the cost of adding features.
          </p>
          <p data-aos-delay="350" data-aos="zoom-in">
            The five values of scrum are:

          </p>

          <ul >
            <li data-aos-delay="400" data-aos="zoom-in"><strong>Courage</strong>
              <br/>We bring our full-selves to development of your software. We show up with strength and courage to
              tackle today's challenges.
            </li>


            <li data-aos-delay="500" data-aos="zoom-in"><strong>Focus</strong>
              <br/>We work in scheduled, half-day blocks to make sure execution is focused and stays on-track.
            </li>

            <li data-aos-delay="600" data-aos="zoom-in"><strong>Commitment</strong>
              <br/>We are committed to a high engagement, momentum-based process.
            </li>


            <li data-aos-delay="700" data-aos="zoom-in"><strong>Respect</strong>
              <br/>We bring respect and joy to the development process.
            </li>


            <li data-aos-delay="800" data-aos="zoom-in"><strong>Openness</strong>
              <br/>We are open to feedback and change.
            </li>

          </ul>


          <em data-aos-delay="900" data-aos="zoom-in">We practice scrum with these following aspects as well:</em>


          <p data-aos-delay="1000" data-aos="zoom-in"><strong>Block Billing</strong>: Half-day or full day blocks. </p>
          <p data-aos-delay="1100" data-aos="zoom-in"><strong>Transparent timesheets</strong>: Timesheets with associated stories sent to you every Sunday night.
          </p>
          <p data-aos-delay="1200" data-aos="zoom-in"><strong>Standup</strong>: Daily meeting in which yesterday's achievements are noted, today's priorities are
            set, and blockers are removed.</p>
          <p data-aos-delay="1300" data-aos="zoom-in"><strong>Sprint planning</strong>: Weekly meeting in which stories are given estimates.</p>

          <p data-aos-delay="1400" data-aos="zoom-in"><strong>Planning Tool</strong>: We will work in the tool of your choice, but recommend <a
            href={"https://clickup.com/?utm_source=heliosdev.shop"} target={"_blank"}>ClickUp</a> if you don't
            already have one.</p>

        </div>
      </div>

    </div>
  )
}


export default TimeAndMaterialsResponse;