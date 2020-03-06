const should = require('should');
const Operators = require("../../src/operators");

describe("Operators", function()
{
  describe('"$eq"', function() {
    const eqOp = Operators['$eq']
    it('should return true for equal values.', async function() { 
        const value1 = '123'
        const value2 = '123'
        should(eqOp(value1, value2)).be.true;
    })
  
    it('should return false for not equal values.', async function() { 
        const value1 = '123'
        const value2 = '133'
        should(eqOp(value1, value2)).be.false;
    })  
      
  })
  
  describe('"$lt"', function() {
    const ltOp = Operators['$lt']
    it('should return true for comparing values.', async function() { 
        const value1 = 123
        const value2 = 124
        should(ltOp(value1, value2)).be.true;
    })
  
    it('should return false for comparing values.', async function() { 
        const value1 = 123
        const value2 = 103
        should(ltOp(value1, value2)).be.false;
    })  
    
    it('should return false for equal comparing values.', async function() { 
        const value1 = 123
        const value2 = 123
        should(ltOp(value1, value2)).be.false;
    })    
      
  }) 
  
  describe('"$le"', function() {
    const leOp = Operators['$le']
    it('should return true for comparing values.', async function() { 
        const value1 = 123
        const value2 = 124
        should(leOp(value1, value2)).be.true;
    })
  
    it('should return false for comparing values.', async function() { 
        const value1 = 123
        const value2 = 103
        should(leOp(value1, value2)).be.false;
    })  
    
    it('should return true for equal comparing values.', async function() { 
        const value1 = 123
        const value2 = 123
        should(leOp(value1, value2)).be.true;
    })    
      
  })    
  
})