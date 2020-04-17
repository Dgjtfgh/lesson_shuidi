import * as React from 'react';
import { MemberEntity } from '../model';
import { render } from 'react-dom';
// class MemberRow extends React.Component<{ key: number, member: MemberEntity }> {
//     constructor(props: Readonly<{ key: number; member: MemberEntity; }>) {
//         super(props)
//     }
//     render() {
//         return (
//             <tr>
//                 <td key={this.props.key}><img src={this.props.member.avatar_url} alt="" /></td>
//                 <td key={this.props.key}>{this.props.member.id}</td>
//                 <td key={this.props.key}>{this.props.member.name}</td>
//             </tr>
//         )
//     }
// }
interface Props {
    key: number
    member: MemberEntity
}
const MemberRow: React.StatelessComponent<{key: number; member: MemberEntity;}> = (props: Props) => {
    return (
        <tr>
            <td key={props.key}><img src={props.member.avatar_url} alt="" /></td>
            <td key={props.key}>{props.member.id}</td>
            <td key={props.key}>{props.member.name}</td>
        </tr>
    )
}
export default MemberRow;