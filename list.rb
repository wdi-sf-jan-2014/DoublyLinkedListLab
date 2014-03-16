# A List class that should be implemented as
# a doubly linked list.  Also, it is important
# to keep track of a head and tail pointer
# for this lab.

# The following methods are the most important
# to implement and should be done first:

# new, push, pop, and length

# The following methods are nice to have and should
# be implemented next:

# [], []=, insert, shift, unshift, first, last

# The following methods are bonus and should only be tackled
# after the previous methods are implemented:

# reverse, max, min, reduce, each, flatten

require './node.rb'

class List
  attr_reader :length

  def initialize
    @head = nil
    @tail = nil
    @length = 0
  end

  # Adds a new value to the end of the list.
  def push(value)
    if @head == nil
      @head = Node.new(value)
      @tail = @head
    else
      old_tail = @tail
      @tail = Node.new(value)
      old_tail.next = @tail
      @tail.previous = old_tail
    end
    @length += 1
    nil
  end

  # Returns the value that is popped off
  # or nil if none exists
  def pop
    return nil if @length == 0

    # special case where the length of the list is 1
    # so the head and tail need to be set to nil
    if @length == 1
      return_value = @tail.value
      nil_node(@tail)
      @tail = nil
      @head = nil
      @length = 0
      return return_value
    end

    old_tail = @tail
    @tail = old_tail.previous
    @tail.next = nil

    return_value = old_tail.value

    @length -= 1

    # Making sure the old_tail has no references to nodes or
    # values.
    nil_node(old_tail)

    return_value
  end

  def insert(value)
  end

  # Given an index, returns the value at that index
  def [](index)
  end

  # Sets a value at the given index.  Returns the value that
  # was assigned
  def []=(index, value)
    value
  end

  # Returns the first value that was removed from the list and
  # shifts all items down by 1
  def shift
  end

  # Adds a new value to the front of the list
  def unshift(value)
  end

  def first
  end

  def last
  end

private
  def nil_node(node)
    node.value = nil
    node.previous = nil
    node.next = nil
  end
end
