import GroupItemImage from '../../imgs/groupItem1.png';
const GroupItem = () => {
    return (
        <div className={"group-item"}>
            <img src={GroupItemImage} alt="Item img"/>
            <h5>Moscow State Linguistical University</h5>
        </div>
    );
}
export default GroupItem