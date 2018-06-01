describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "HIJ hij" para "ABC abc" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABC abc"), "HIJ hij");
    });
  });
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg"', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "ABC abc" para "HIJ hij" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJ hij"), "ABC abc");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33), 'object');
      assert.property(cipher.createCipherWithOffset(33), 'encode');
      assert.property(cipher.createCipherWithOffset(33), 'decode');

      it('debería retornar "HIJ hij" para "ABC abc" con offset 33', () => {
        assert.equal(cipher.createCipherWithOffset(33).encode("ABC abc"), "HIJ hij");
      });


      describe('cipher.createCipherWithOffset().encode', () => {
      it('debería ser una función',() => {
        assert.equal(typeof cipher.createCipherWithOffset(33).encode, 'function');
      });
      
      });


      describe('cipher.createCipherWithOffset().decode', () => {
        it('debería ser una función',() => {
          assert.equal(typeof cipher.createCipherWithOffset(33).decode, 'function');
        });
        it('debería retornar "ABC abc" para "HIJ hij" con offset 33', () => {
          assert.equal(cipher.createCipherWithOffset(33).decode("HIJ hij"), "ABC abc");
        });
        });

    });

  });
});
