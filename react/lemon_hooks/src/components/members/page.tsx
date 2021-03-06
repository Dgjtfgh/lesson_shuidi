import * as React from 'react';
import { MemberEntity } from '../../model';

interface Props {
    members: MemberEntity[],
    fetchMembers(): void;
}
export class MembersPage extends React.Component <Props, {}>{
    constructor(props) {
        super(props);
        this.state = { members: [] }
    }
    public componentDidMount() {
        console.log('11111');
        this.props.fetchMembers();
    }
    public render() {
        return (
            <div className="row"> 
                <h2>Members Page</h2>
                <table className="table">
                    <tbody>
                        {
                            this.props.members
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}