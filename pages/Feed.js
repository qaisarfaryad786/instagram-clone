import Image from "next/image";
import styles from "../styles/feed.module.css";
import { MdHomeFilled } from "react-icons/md";
// import { IoPaperPlaneOutline } from 'react-icons/io';
import { SlPaperPlane } from "react-icons/sl";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { RxDotsHorizontal } from "react-icons/rx";
import { FaRegComment } from "react-icons/fa";
import { GrBookmark } from "react-icons/gr";

export default function Feed() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/images/instagram-logo.png"
            width={120}
            height={40}
            style={{}}
          />
        </div>
        <div className={styles.input_pages}>
          <input className={styles.input} type="text" placeholder="Search" />

          <div className={styles.pages}>
            <MdHomeFilled />
            <SlPaperPlane />
            <BsPlusSquare />
            <MdOutlineExplore />
            <FiHeart />
            <Image
              src="/images/acount.jpg"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </header>
      <section className={styles.side_card}>
        <Image
          src="/images/acount.jpg"
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
        <div style={{ marginLeft: "-87px" }}>
          <span style={{ fontWeight: "500", fontSize: "15px" }}>
            qasirfaryad5
          </span>
          <br></br>
          <span
            style={{ fontSize: "14px", marginLeft: "3px", color: "#8b8585" }}
          >
            Qaisar Faryad
          </span>
        </div>
        <div>
          <span
            style={{ color: "#03a9f4", fontWeight: "500", fontSize: "14px" }}
          >
            Switch
          </span>
        </div>
      </section>

      <section className={styles.side_card2}>
        <div>
          <span
            style={{ fontSize: "14px", marginLeft: "3px", color: "#8b8585" }}
          >
            Suggestions for You
          </span>
        </div>
        <div>
          <span style={{ fontSize: "14px", marginLeft: "3px", color: "black" }}>
            See all
          </span>
        </div>

        {/* <Image
            src="/images/pic2.jpg"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <div style={{marginLeft:"-87px"}}>
            <span style={{fontWeight:"500",fontSize:"15px"}}>qasirfaryad5</span>
            <br></br>
            <span style={{fontSize:"14px", marginLeft:"3px",color:"#8b8585"}}>Qaisar Faryad</span>
          </div>
          <div>
            <span style={{color:"#03a9f4",fontWeight:"500",fontSize:'14px'}}>Follow</span>
          </div> */}
      </section>

      <section className={styles.side_card3}>
        <Image
          src="/images/pic3.jpg"
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
        <div style={{ marginLeft: "-87px" }}>
          <span style={{ fontWeight: "500", fontSize: "15px" }}>
            arbazkhan78
          </span>
          <br></br>
          <span
            style={{ fontSize: "14px", marginLeft: "3px", color: "#8b8585" }}
          >
            Arbaz Khan
          </span>
        </div>
        <div>
          <span
            style={{ color: "#03a9f4", fontWeight: "500", fontSize: "14px" }}
          >
            Follow
          </span>
        </div>
      </section>

      <section className={styles.side_card4}>
        <Image
          src="/images/pic6.jpg"
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
        <div style={{ marginLeft: "-87px" }}>
          <span style={{ fontWeight: "500", fontSize: "15px" }}>
            bilalqr786
          </span>
          <br></br>
          <span
            style={{ fontSize: "14px", marginLeft: "3px", color: "#8b8585" }}
          >
            Bilal Qureshi
          </span>
        </div>
        <div>
          <span
            style={{ color: "#03a9f4", fontWeight: "500", fontSize: "14px" }}
          >
            Follow
          </span>
        </div>
      </section>

      <section className={styles.posts}>
        <div className={styles.post_header}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "14px",
            }}
          >
            <Image
              src="/images/pic6.jpg"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <span>qasirfaryad5</span>
          </div>

          <div>
            <RxDotsHorizontal />
          </div>
        </div>
        <Image src="/images/acount.jpg" width={497} height={497} />
        <div className={styles.icons}>
          <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
            <FiHeart />
            <FaRegComment />
            <SlPaperPlane />
          </div>
          <div style={{ fontSize: "20px" }}>
            <GrBookmark />
          </div>
        </div>
        <span style={{paddingLeft:"10px",fontSize:"12px"}}>44,156 likes</span>
        <br />
        <span style={{paddingLeft:"10px",fontSize:"12px"}}>You can regret a lot of things but you'll never regret being kind.</span>
            <br></br>
        <span style={{paddingLeft:"10px",fontSize:"12px",color: "#8b8585"}}>View all Comments</span>
        <br></br>
        <span style={{paddingLeft:"10px",paddingTop:"5px",fontSize:"10px",color: "#8b8585"}}>10 HOUR AGO</span>
      </section>
    </div>
  );
}
