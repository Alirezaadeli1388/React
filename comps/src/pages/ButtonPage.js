import { BsTelegram, BsCheckAll } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillWarning } from "react-icons/ai";
import { MdDangerous } from "react-icons/md";
import Button from "../components/Button";

function ButtonPage() {
    return (
        <div>
            <div>
                <Button primary rounded><BsTelegram />Telegram</Button>
            </div>
            <div>
                <Button secondary rounded><FaXTwitter />Twitter</Button>
            </div>
            <div>
                <Button warning rounded><AiFillWarning />warning</Button>
            </div>
            <div>
                <Button success rounded><BsCheckAll />success</Button>
            </div>
            <div>
                <Button danger rounded><MdDangerous />danger</Button>
            </div>
        </div>
    );
}

export default ButtonPage;
