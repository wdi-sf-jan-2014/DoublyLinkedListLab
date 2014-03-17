var List = require("../list")

describe("Node", function(){

	describe("hasOwnProperty", function(){
		var node = new Node();

		it("'value' ", function(){
			expect(node.hasOwnProperty("value")).toEqual(true);
		});

		it("'next'", function(){
			expect(node.hasOwnProperty("next")).toEqual(true);
		});
	});

	describe("constructor defaults", function(){
		var node = new Node();

		it("'value' ", function(){
			expect(node["value"]).toBe(null);
		});

		it("'next'", function(){
			expect(node["next"]).toBe(null);
		});
	});

	describe("constructor with value", function(){

		it("sets node.value ", function(){
			var node = new Node(1);
			expect(node.value).toBe(1);
		});

	});
})


describe("List", function(){

	describe("hasOwnProperty", function(){
		var list = new List();

		it("'node' ", function(){
			expect(list.hasOwnProperty("node")).toEqual(true);
		});

		it("'last'", function(){
			expect(list.hasOwnProperty("last")).toEqual(true);
		});

		it("'length'", function(){
			expect(list.hasOwnProperty("length")).toEqual(true);
		});
	});

	describe("constructor defaults", function(){
		var list = new List();

		it("should set node to `null`", function(){
			expect(list.node).toEqual(null)
		});

		it("should set last to `null`", function(){
			expect(list.last).toEqual(null)
		});

		it("should set length to `0`", function(){
			expect(list.length).toEqual(0)
		});
	});

	describe("prototype has own property", function(){

		it("push", function(){
			expect(List.prototype.hasOwnProperty("push")).toEqual(true);
		});

		it("pop", function(){
			expect(List.prototype.hasOwnProperty("pop")).toEqual(true);
		});

		it("shift", function(){
			expect(List.prototype.hasOwnProperty("shift")).toEqual(true);
		});

		it("unshift", function(){
			expect(List.prototype.hasOwnProperty("unshift")).toEqual(true);
		});

		it("insert_after", function(){
			expect(List.prototype.hasOwnProperty("insert_after")).toEqual(true);
		});

		it("head", function(){
			expect(List.prototype.hasOwnProperty("head")).toEqual(true);
		});

		it("tail", function(){
			expect(List.prototype.hasOwnProperty("tail")).toEqual(true);
		});
	});


	describe("#push", function(){
		var list;
		beforeEach(function(){
			list = new List();
		});

		it("should set node for empty list", function(){
			list.push(1);
			expect(list.node).toBeDefined();
		});

		it("should update last", function(){
			old_last = list.last
			list.push(1);
			expect(list.last).not.toEqual(old_last);
		});

		it("should update last with value equal to pushed value", function(){
			list.push(1);
			list.push(2);
			expect(list.last.value).toEqual(2);
		});

		it("should update length", function(){
			list.push(1);
			list.push(2);
			expect(list.length).toEqual(2);
		});
		it("should return self", function(){
			expect(list.push(1)).toEqual(list);
		});
	});

	describe("#tail", function(){
		var list;
		beforeEach(function(){
			list = new List();
		});

		it("should return a List", function(){
			list.push(1).push(2);
			expect(list.tail().constructor).toEqual(List);
		});

		it("should return self if node is null", function(){
			expect(list.tail()).toEqual(list);
		});

		it("should return an empty list if next node is null", function(){
			list.push(1);
			var tail = list.tail();
			expect(tail.node).toEqual(null);
			expect(tail.last).toEqual(null);
		});

		it("should return a new list with node.next for length > 1", function(){
			list.push(1).push(2);
			var next_node = list.node.next;
			var tail = list.tail();
			expect(tail.node).toEqual(next_node)
		});

		it("should return a new list with same last node", function(){
			list.push(1).push(2);
			var tail = list.tail()
			expect(tail.last).toEqual(list.last)
		});

		it("should return a new list with length - 1", function(){
			list.push(1).push(2);
			var length = list.length;
			var tail = list.tail();
			expect(tail.length).toEqual(length - 1)
		});
	});


	describe("#pop", function(){
		var list;
		beforeEach(function(){
			list = new List();
		});
		it("should return self for empty list", function(){
			expect(list.pop()).toEqual(list)
		});

		it("should set node to null for one item list", function(){
			list.push(1);
			list.pop();
			expect(list.node).toEqual(null);
		});

		it("should set last to null for one item list", function(){
			list.push(1);
			list.pop();
			expect(list.last).toEqual(null);
		});

		it("should set next of node at index `length - 2` to null", function(){
			list.push(1);
			list.push(2);
			list.push(3);
			var secondToLast = list;
			while(secondToLast.length !== 2 ){
				secondToLast = secondToLast.tail();
			};
			list.pop();
			expect(secondToLast.node.next).toEqual(null);
		});

		it("should update last to equal second to last", function(){
			list.push(1);
			list.push(2);
			list.push(3);
			var secondToLast = list;
			while(secondToLast.length !== 2 ){
				secondToLast = secondToLast.tail();
			};
			list.pop();
			expect(secondToLast.node).toEqual(list.last);
		});
		it("should return last", function(){
			var last = list.last;
			expect(list.pop()).toEqual(last);
		});
	});


	describe("#head", function(){
		it("should return null if empty", function(){
			var list = new List();
			expect(list.head()).toEqual(null);
		});

		it("should return first node.value when nonempty", function(){
			var list = new List();
			list.push(1);
			expect(list.head()).toEqual(1);
		});
	});


	describe("#shift", function(){
		it("should set self to tail node", function(){
			var list = new List(); 
			list.push(1).push(2);
			var tail = list.tail();
			list.shift();
			expect(list.node).toEqual(tail.node);
		});
	});

	describe("#insert_after", function(){
		var list;
		beforeEach(function(){
			list = new List();
		});

		it("should throw a RangeError if empty", function(){
			try{
				list.insert_after(0);
			} catch(e){
				expect(e.constructor).toBe(RangeError)
			}
		})

		it("should throw a RangeError if index is too large ", function(){
			try{
				list.insert_after(1,3);
			} catch(e){
				expect(e.constructor).toBe(RangeError)
			}
		});

		it("should throw a RangeError if index is too small ", function(){
			try{
				list.insert_after(-1,1);
			} catch(e){
				expect(e.constructor).toBe(RangeError)
			}
		});

		it("should insert after an exisiting index",function(){
				list.push(1).push(2).push(4);
				var old_node = list.node.next.next;
				list.insert_after(1,3);
				var new_node = list.node.next.next;
				expect(new_node.value).toEqual(3);
				expect(new_node.next).toBe(old_node)
		});

		it("should insert after last exisiting index and update last",function(){
				list.push(1).push(2);
				var old_node = list.node.next;
				list.insert_after(1,3);
				var new_node = list.node.next.next;
				expect(new_node.value).toEqual(3);
				expect(list.last).toBe(new_node)
		});
	});
});
