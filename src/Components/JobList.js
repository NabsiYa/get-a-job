import { Component } from "react";
import Job from "./Job";

class JobList extends Component {

    constructor (props) {
        super(props);
        this.state = {
            jobs_non_filtered: [], // create empty array called "jobs_non_filtered" which contain the non filtered jobs.
            jobs: [],
        };
    }

    getJobs() {
        fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
            .then(response => response.json())
            .then(json => {
                this.setState({ jobs_non_filtered: json });
                this.setState({ jobs: json });
            });
    }

    componentDidMount() {
        // get jobs once the site loads.
        this.getJobs();
    }

    componentDidUpdate(PrevProps, PrevState) {

        if (PrevProps.query === this.props.query) return;

        if (this.props.query.length !== 0)
        {
            const filtered = this.state.jobs_non_filtered.filter((job) => { return job.tyotehtava.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1; });
            this.setState({ jobs: filtered });
        } else {
            this.setState({ jobs: this.state.jobs_non_filtered });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.query.length == 0 ? "" : "Hakusana on " + this.props.query}</h1>
                { this.state.jobs.map((job) => { return (
                    <div>
                        <Job id={job.id} organization={job.organisaatio} title={job.ammattiala} work={job.tyotehtava} link={job.linkki}/>
                    </div>
                ) }) }
            </div>
        )
    }

};

export default JobList;