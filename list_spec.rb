require 'rspec'
require './list.rb'
require 'pry'

describe List do
  let(:list) { List.new }

  it 'starts out with a length of 0' do
    expect(list).to respond_to(:length)
    expect(list.length).to eq(0)
  end

  it 'should not allow the length be assigned' do
    expect(list).to_not respond_to(:length=)
  end

  it 'should respond to push and pop' do
    expect(list).to respond_to(:push).with(1).argument
    expect(list).to respond_to(:pop).with(0).argument
  end

  it 'should push items to the end of the list and remove them' do
    list.push(1)
    expect(list.length).to eq(1)
    list.push(2)
    expect(list.length).to eq(2)

    expect(list.pop).to eq(2)
    expect(list.length).to eq(1)
    expect(list.pop).to eq(1)
    expect(list.length).to eq(0)

    expect(list.pop).to be_nil
    expect(list.length).to eq(0)
  end
end
