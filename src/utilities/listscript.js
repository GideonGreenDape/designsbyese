import orderIcon from "../Assets/Icons/orderIcon.svg";
import inboxIcon from "../Assets/Icons/inboxIcon.svg";
import likeIcon from "../Assets/Icons/likeIcon.svg";
import listcartIcon from "../Assets/Icons/listcartIcon.svg";
import walletgiftcardIcon from "../Assets/Icons/walletgiftcardIcon.svg";
import historyIcon from "../Assets/Icons/historyIcon.svg"

const list = [
    {
        id: 1,
        name: 'Orders',
        image: orderIcon,
        location:'/order_history'
    },
    {
        id: 2,
        name: 'Cart',
        image: listcartIcon,
        location: '/account_cart'
    },
    {
        id: 3,
        name: 'inbox',
        image: inboxIcon
    },
    {
        id: 4,
        name: 'Recently Viewed',
        image: historyIcon
    }
]



export default list;