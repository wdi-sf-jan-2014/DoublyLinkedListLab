require 'rspec'
require './node.rb'
require 'pry'

describe Node do
  let(:node) { Node.new(1) }
  
  it 'should take a value on create' do
    expect(Node).to respond_to(:new).with(1).argument
  end

  it 'should have a next and previous reference' do
    expect(node).to respond_to(:next)
    expect(node).to respond_to(:previous) 

    expect(node).to respond_to(:next=)
    expect(node).to respond_to(:previous=)
  end

  it 'should save the value that is set' do
    expect(node).to respond_to(:value)
    expect(node).to respond_to(:value=)

    expect(node.value).to be(1)
    node.value = 10

    expect(node.value).to be(10)
  end
  

  it 'should have next and previous start as nil' do
    expect(node.next).to be_nil
    expect(node.previous).to be_nil
  end
  
end
