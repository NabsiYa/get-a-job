import { Component } from "react";

import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

// Import internal Component
import Job from "./Job";

class JobList extends Component {

    constructor (props) {
        super(props);
        this.state = {
            jobs_non_filtered: [], // create empty array called "jobs_non_filtered" which contain the non filtered jobs.
            jobs: [],
        };
    }

    componentDidMount() {
        // get jobs once the site loads.
        fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki') // TODO: in future we will get that data from a local database for now we'll use publicly available data.
            .then(response => response.json())
            .then(json => {
                this.setState({ jobs_non_filtered: json });
                this.setState({ jobs: json });
            });
    }

    componentDidUpdate(PrevProps, PrevState) {

        // Without this the application would have weird behaviour which would end up breaking the application.
        if (PrevProps.query === this.props.query) return;

        if (this.props.query.length !== 0)
        {
            const filtered = this.state.jobs_non_filtered.filter((job) =>
            {
                return job.tyotehtava.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1;
            });

            this.setState({ jobs: filtered });
        }
        else
        {
            this.setState({ jobs: this.state.jobs_non_filtered });
        }
    }

    render() {
        return (
            <div>
                <Alert variant="info">
                    {this.props.query.length == 0 ? `No query specified showing all ${this.state.jobs_non_filtered.length} results.` : `Found ${this.state.jobs.length} jobs with the query ${this.props.query}.`}
                </Alert>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Organization</th>
                            <th>Profession</th>
                            <th>Task</th>
                            <th>Address</th>
                            <th>Checked</th>
                        </tr>
                        {
                            this.state.jobs.map((job) =>
                            {
                                return (
                                    <Job id={job.id} organization={job.organisaatio} profession={job.ammattiala} task={job.tyotehtava} address={job.osoite} link={job.linkki}/>
                                )
                            })
                        }
                    </thead>
                </Table>
            </div>
        )
    }

};

export default JobList;
