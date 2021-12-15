import GroupItem from "./GroupItem";

const GroupList = () => {
    return (
        <section className={"group-list"}>
            <div className={" sideBlock-container"}>
                <div className={"block-header"}>
                    <h6>MY GROUPS</h6>
                    <div id={"edit-list"}>EDIT LIST</div>
                </div>
                <GroupItem/>
                <GroupItem/>
                <GroupItem/>
                <h6 id={"show-all"}>SHOW ALL (8)</h6>
            </div>
        </section>

    );
}
export default GroupList