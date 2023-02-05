import React from "react";
import styles from "./MultiStepForm.module.css";
import BgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";

function MultiStepForm() {
  return (
    <div className={styles.parent}>
      <div className={styles.formcard}>
        <div className={styles.sidebarleft}>
          <BgSidebarDesktop />
          <div className={styles.stepCover}>
            <div className={styles.step}>
              <div className={styles.roundedCircle}>1</div>
              <div className={styles.stepDetails}>
                <small>Step 1</small>
                <span>Your Info</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sidebarright}>Right</div>
      </div>
    </div>
  );
}

export default MultiStepForm;
