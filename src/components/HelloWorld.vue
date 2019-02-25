<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <input type="text" placeholder="Search Here...!!">
      <input type="button" value="Search" class="b">
    </p>
    <table id="tbl">
  <tr>
    <th>Model Number</th>
    <th>Company Name</th>
    <th>Luanch Year</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Moto G4 Plus</td>
    <td>Motorola</td>
    <td>2016</td>
    <td>14,999</td>
  </tr>
  <tr>
    <td>Oppo F3</td>
    <td>Oppo</td>
    <td>2017</td>
    <td>19,999</td>
  </tr><tr>
    <td>Nokia 6.1</td>
    <td>Nokia</td>
    <td>2017</td>
    <td>14,999</td>
  </tr><tr>
    <td>Redmi Note 5 Pro</td>
    <td>Xaomi</td>
    <td>2017</td>
    <td>15,999</td>
  </tr><tr>
    <td>Realme 2</td>
    <td>Realme</td>
    <td>2018</td>
    <td>8,999</td>
  </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  color: blueviolet;
}

input[type=text] {
  width: 60%;
  box-sizing: border-box;
  border: 2px solid blue;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  background-image: url('search.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
}

.b {
  background-color: rgb(52, 8, 134);
  border: none;
  width: 8%;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  cursor: pointer;
}
#tbl{

  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse:separate;
  width: 100%;
  border:3px solid #ddd;
  padding:2px;
}
#tbl th{
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: rgb(0, 8, 1);
  color: silver;
}

#tbl th:hover {
background-color: rgb(76, 85, 85);  
}

#tbl tr:hover{
  background-color: rgb(199, 220, 238);
}
</style>
