var jijop=4;Ext.require(['Ext.data.*']);Ext.onReady(function() {window.generateData = function(n, floor){var data = [],p = (Math.random() *  11) + 1,i;floor = (!floor && floor !== 0)? 20 : floor;var k =[2,50,30,700,456,898,909,99,78,789,789,87];var kiko =['rai','February','March','April','May','June','July','August','September','October','November','December'];		for (i = 0; i < (n || 12); i++) {data.push({name: kiko[i],data1: k[i],});}return data;};window.generateDataNegative = function(n, floor){var data = [],p = (Math.random() *  11) + 1,i;floor = (!floor && floor !== 0)? 20 : floor;var kiko =['rai','February','March','April','May','June','July','August','September','October','November','December'];var k =[2,50,30,700,456,898,909,99,78,789,789,87];for (i = 0; i < (n || 12); i++) {data.push({name: kiko[i],data1: k[i],});}return data;};window.store1 = Ext.create('Ext.data.JsonStore', {fields: ['name', 'data1'],data: generateData()});window.storeNegatives = Ext.create('Ext.data.JsonStore', {fields: ['name', 'data1'],data: generateDataNegative()});window.store3 = Ext.create('Ext.data.JsonStore', {fields: ['name', 'data1'],data: generateData()});window.store4 = Ext.create('Ext.data.JsonStore', {fields: ['name', 'data1'],data: generateData()});window.store5 = Ext.create('Ext.data.JsonStore', {fields: ['name', 'data1'],data: generateData()});    window.loadTask = new Ext.util.DelayedTask();});