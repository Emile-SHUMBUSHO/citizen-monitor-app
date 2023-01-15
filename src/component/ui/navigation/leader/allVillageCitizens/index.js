import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Container } from "../../../containers";
import { MainHeader } from "../../../../header";
import { Content } from "../../../containers";
import { ScrollView } from "react-native-gesture-handler";
import Loader from "../../../../loader/loader";
import { PrimaryButton } from "../../../../buttons";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { Table, Row, Rows } from "react-native-table-component";
import { userInfo } from "../../../../../utils/userInfo";
import { getAllVillageCitizens } from "../../../../../redux/actions/leaderAction";
import { useDispatch, useSelector } from "react-redux";

const AllVillageCitizens = () => {
  const {citizensInVillage, isLoading} = useSelector((state)=> state.leader);
  const [userInformations, setUserInformations] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    userInfo().then((response) => {
      setUserInformations(response);
    });
    dispatch(getAllVillageCitizens(data));
  }, []);
  const data = {
    province:userInformations?.profile?.province,
    district:userInformations?.profile?.district,
    sector:userInformations?.profile?.sector,
    cell:userInformations?.profile?.cell,
    village:userInformations?.profile?.village,
  }
  
  const [tableHead, setTableHead] = useState([
    "No",
    "First Name",
    "Last Name",
    "Telphone",
    "ID",
  ]);
  const [tableData, setTableData] = useState([
    ["1", "Emile", "Shumbusho", "0785188981", "11997801700500"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; // January is 0, so we need to add 1
  const year = today.getFullYear();

  const html = `<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* CSS */
      .header {
        display: flex;
        justify-content: space-between;
        padding: 15px;
      }
      .left img {
        width: 150px;
      }
      .left {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      /* CSS */
      body {
        font-family: "Open Sans", sans-serif;
      }
      h4 {
        font-family: "Montserrat", sans-serif;
        font-size: 10px;
      }
      /* CSS */
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* CSS */
      table {
        border-collapse: collapse;
        width: 100%;
      }

      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }

      td {
        background-color: #fff;
      }
      thead {
        background-color: #5c5c5c;
        color: #fff;
      }
      
      tbody tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      
    </style>
  </head>
  <body>
  <div class="container">
  <div class="header">
    <div class="left">
      <img src="../../../../../../assets/logo.png" alt="" />
      <div class="text">
        <h3>Government of Rwanda</h3>
        <h4>Province:${userInformations?.profile?.province}</h4>
        <h4>District:${userInformations?.profile?.district}</h4>
        <h4>Sector:${userInformations?.profile?.sector}</h4>
        <h4>Cell: ${userInformations?.profile?.cell}</h4>
        <h4>Village:${userInformations?.profile?.Village}</h4>
        <h4>Village chef: ${userInformations?.profile?.lastName}${" "}${
    userInformations?.profile?.firstName
  }</h4>
        <h4>Phone number</h4>
      </div>
    </div>
    <div class="right">
      <h4>Date:${day}/${month}/${year}</h4>
    </div>
  </div>
  <hr />
  <h6 class="title">Registered Citizens</h6>
  <table>
  <thead>
    <tr>
    ${tableHead.map((header) => `<th>${header}</th>`).join("")}
    </tr>
  </thead>
  <tbody>
    ${tableData
      .map(
        (row) => `<tr>
      ${row.map((data) => `<td>${data}</td>`).join("")}
    </tr>`
      )
      .join("")}
  </tbody>
</table>
</div>
  </body>
  </html>`;
  let generatePDF = async () => {
    const file = await printToFileAsync({
      html: html,
      data: {
        tableData: tableData,
      },
      base64: false,
    });
    await shareAsync(file.uri);
  };
  return (
    <Container>
      <Loader visible={isLoading}/>
      <MainHeader>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", marginHorizontal: 20 }}>
            Citizens in My Village
          </Text>
        </View>
      </MainHeader>
      <View style={styles.content}>
        <ScrollView>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.heading}
            />
            <Rows
              data={citizensInVillage?.map((data) => {
                let nbr = 0
                return [nbr+1, data.cell, data.sector, data.district, data.province];
              })}
              textStyle={styles.text}
              rowStyle={styles.row}
              alternateRowStyle={styles.evenRow}
            />
          </Table>
          <View style={styles.pdfBtn}>
            <PrimaryButton onPress={generatePDF} title="Download PDF file" />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    height: "75%",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    padding: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  pdfBtn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  head: { height: 100, backgroundColor: "#f1f8ff" },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#f2f2f2",
  },
  text: {
    margin: 6,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 10,
  },
  row: { backgroundColor: "white" },
  evenRow: { backgroundColor: "#f2f2f2" },
});

export default AllVillageCitizens;
