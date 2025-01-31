import { TfiHome, TfiMenu, TfiMore, TfiPlus, TfiSharethis } from "react-icons/tfi";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<TfiHome size="32"/>} />
            <SideBarIcon icon={<TfiMenu size="32"/>} />
            <SideBarIcon icon={<TfiPlus size="32"/>} />
            <SideBarIcon icon={<TfiSharethis size="32"/>} />
            <SideBarIcon icon={<TfiMore size="32"/>} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip'}) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <div className="sidebar-tooltip group-hover:scale-100">
                {text}
            </div>
        </div>
    );
}

const SideBarTooltip = ({ text }) => {
    return (
        <div className="sidebar-tooltip">
            {text}
        </div>
    );
}

export default SideBar;