import { Center, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext, paymentdone } from "../LastContext/AppContextProvider";
import styles from "./payment.module.css";
export default function Payment() {
  const {authState, authDispatch } = useContext(AuthContext)
  const handlePayment = () => {
    window.confirm("Are you Sure!!");
    setTimeout(() => {
      alert("Your order is confirmed !!");
    }, 2000);
    setTimeout(() => {
      alert("THANKS FOR SHOPPING");
      authDispatch(paymentdone())
    }, 4000);
    
  };
  if(!authState.payment){
    return <Navigate to="/"/>
  }
  return (
    <>
      <Center>
        <Image src="https://i.imgur.com/GSFnQtR.jpg"></Image>
      </Center>

      <div className={styles.maina}>
        <div className={styles.hex}></div>
        <div className={styles.hexc}>
          <div className={styles.containera}>
            <div className={styles.left}>
              <h3>Payment Methods</h3>
              <form>
                Full name
                <input type="text" name="" placeholder="Enter name" required />
                Email
                <input type="text" name="" placeholder="Enter email" required />
                Address
                <input
                  type="text"
                  name=""
                  placeholder="Enter address"
                  required
                />
                City
                <input type="text" name="" placeholder="Enter City" required />
                <div id={styles.zip}>
                  <label>
                    State
                    <select>
                      <option>Choose State..</option>
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chhattisgarh</option>
                      <option>Goa</option>
                      <option>Gujarat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Madhya Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Manipur</option>
                      <option>Meghalaya</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>
                      <option>Odisha</option>
                      <option>Punjab</option>
                      <option>Rajasthan</option>
                      <option>Sikkim</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>Tripura</option>
                      <option>Uttar Pradesh</option>
                      <option>Uttarakhand</option>
                      <option>West Bengal</option>
                    </select>
                  </label>
                  <label>
                    Zip code
                    <input type="number" name="" placeholder="Zip code" />
                  </label>
                </div>
              </form>
            </div>
            <div className={styles.right}>
              <h3>PAYMENT</h3>

              <form>
                Accepted Card <br />
                <img
                  id={styles.visa}
                  src="https://i.im.ge/2022/07/23/F792dq.png"
                  width="350"
                />
                <br />
                <br />
                Credit card number
                <input
                  id={styles.card_num}
                  name=""
                  placeholder="Enter card number"
                />
                <br />
                Exp month
                <input type="text" name="" placeholder="Enter Month" />
                <div id={styles.zip}>
                  <label>
                    Exp year
                    <select>
                      <option>Choose Year..</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                    </select>
                  </label>
                  <label>
                    CVV
                    <input type="number" name="" placeholder="CVV" />
                  </label>
                </div>
              </form>

              <button onClick={handlePayment} id={styles.cnfPayment}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
