
import * as React from 'react';
import MemberHeader from './memberHeader';
import MemberRow from './memberRow';
import { memberAPI } from '../api/member';
import { MemberEntity } from '../model';
interface Props {
    key: number
    member: MemberEntity
}
interface State {
    members: MemberEntity[]
}
// 内部有数据  react state    vue data
export class MembersPage extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);  // 父类的构造函数执行一下
        this.state = { // 组件的状态
            // vue data   react 分隔   没有api
            // react  一切皆编程语法  
            members: []
        }
    }
    public componentDidMount() {  // vue mounted
        // ts 虽然多写了些代码，但是会减少很多调试
        memberAPI
            .fetchMembers()
            .then((members) => {
                this.setState({
                    members
                })
            })
    }
    public render() {  // 必须实现的接口
        return (
            <div className="row">
                {/* adgggg */}
                <h2>Members Page</h2>
                <table className="table">
                    <thead>
                        <MemberHeader />
                    </thead>
                    <tbody>
                        {
                            this.state.members.map(member => 
                                <MemberRow 
                                    key={member.id}
                                    member = {member} 
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}