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

load 'node.rb'

class List 
  attr_reader :length
  attr_accessor :head, :tail

  def initialize
    @head = nil
    @tail = nil
    @length = 0
  end

  # Adds a new value to the end of the list.
  def push(value)
    newNode = Node.new(value)
    if @head.nil?
      @head = newNode
      @tail = @head
    else 
      old_tail = @tail
      @tail = newNode
      @tail.previous = old_tail
    end
    @length += 1
    nil
  end

  # Returns the value that is popped off
  # or nil if none exists
  def pop
    # return nil if @length == 0
    # Tim did a fancy private method.....
    if @tail.nil?
      old_tail = nil
    else
      old_tail = @tail.value
      if @tail.previous.nil?
        @tail = nil
      else
        new_tail = @tail.previous
        @tail = new_tail
      end
      @length -= 1
    end
    # @tail.previous = new_tail.previous  
    return old_tail

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
end
