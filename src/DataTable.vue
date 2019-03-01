
<template>
<div class="">
<div id="app">
  <v-app id="inspire">
    <v-toolbar dark color="warning" fixed>
      <v-toolbar-title class="white--text">Search From Here</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-menu offset-y :nudge-left="170" :close-on-content-click="false">
          <v-btn icon slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
          <v-list>
            <v-list-tile  v-for="(item) in headers"  :key="item.value"   @click="changeSort(item.value)">  
            </v-list-tile>
          </v-list>
        </v-menu>
    </v-toolbar>
        <v-layout v-resize="onResize" column style="padding-top:80px">
          <v-data-table :headers="headers" :items="mobilephones" :search="search" :pagination.sync="pagination" :hide-headers="isMobile" :class="{mobile: isMobile}" >
            <template slot="items" slot-scope="props">
              <tr v-if="!isMobile" class="red--text .font-weight-medium">
                <td >{{ props.item.name }}</td>
                <td class="text-md-right ">{{ props.item.model }}</td>
                <td class="text-md-right">{{ props.item.luanchyear }}</td>
                <td class="text-md-right">{{ props.item.price }}</td>
              </tr>
              <tr v-else>
                <td>
                  <ul class="flex-content">
                    <li class="flex-item primary" data-label="name" >
                      {{ props.item.name }}
                        </li>
                    <li class="flex-item" data-label="model">{{ props.item.model }}</li>
                    <li class="flex-item" data-label="luanchyear">{{ props.item.luanchyear }}</li>
                    <li class="flex-item" data-label="price">{{ props.item.price }}</li>
                    
                  </ul>
                </td>
              </tr>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-layout>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    msg: String
  }
}
</script>