using System;

namespace Test
{
  public class TestModelBuilder
  {
    private string _stringTest = "";
    private sbyte _sByteTest = 0;
    private byte _byteTest = 0;
    private short _shortTest = 0;
    private ushort _uShortTest = 0;
    private int _intTest = 0;
    private uint _uIntTest = 0;
    private long _longTest = 0;
    private ulong _uLongTest = 0;
    private float _floatTest = 0.0f;
    private double _doubleTest = 0.0;
    private decimal _decimalTest = 0.0m;
    private bool _boolTest = false;
    private char _charTest = 'X';
    private DateTime _dateTimeTest = new DateTime(1970, 1, 1);
    private sbyte? _sByteNullableTest = null;
    private byte? _byteNullableTest = null;
    private short? _shortNullableTest = null;
    private ushort? _uShortNullableTest = null;
    private int? _intNullableTest = null;
    private uint? _uIntNullableTest = null;
    private long? _longNullableTest = null;
    private ulong? _uLongNullableTest = null;
    private float? _floatNullableTest = null;
    private double? _doubleNullableTest = null;
    private decimal? _decimalNullableTest = null;
    private bool? _boolNullableTest = null;
    private char? _charNullableTest = null;
    private DateTime? _dateTimeNullableTest = null;
    private string[] _stringArrayTest = new string[]{ "" };
    private sbyte[] _sByteArrayTest = new sbyte[]{ 0 };
    private byte[] _byteArrayTest = new byte[]{ 0 };
    private short[] _shortArrayTest = new short[]{ 0 };
    private ushort[] _uShortArrayTest = new ushort[]{ 0 };
    private int[] _intArrayTest = new int[]{ 0 };
    private uint[] _uIntArrayTest = new uint[]{ 0 };
    private long[] _longArrayTest = new long[]{ 0 };
    private ulong[] _uLongArrayTest = new ulong[]{ 0 };
    private float[] _floatArrayTest = new float[]{ 0.0f };
    private double[] _doubleArrayTest = new double[]{ 0.0 };
    private decimal[] _decimalArrayTest = new decimal[]{ 0.0m };
    private bool[] _boolArrayTest = new bool[]{ false };
    private bool?[] _boolArrayNullableTest = null;
    private char[] _charArrayTest = new char[]{ 'X' };
    private char?[] _charArrayNullableTest = null;
    private DateTime[] _dateTimeArrayTest = new DateTime[]{ new DateTime(1970, 1, 1) };
    private SomeType _someTypeTest = null;
    private SomeType? _someTypeNullableTest = null;
    private SomeType[] _someTypeArrayTest = null;

    public TestModel Build() =>
      new TestModel
      {
        StringTest = _stringTest,
        SByteTest = _sByteTest,
        ByteTest = _byteTest,
        ShortTest = _shortTest,
        UShortTest = _uShortTest,
        IntTest = _intTest,
        UIntTest = _uIntTest,
        LongTest = _longTest,
        ULongTest = _uLongTest,
        FloatTest = _floatTest,
        DoubleTest = _doubleTest,
        DecimalTest = _decimalTest,
        BoolTest = _boolTest,
        CharTest = _charTest,
        DateTimeTest = _dateTimeTest,
        SByteNullableTest = _sByteNullableTest,
        ByteNullableTest = _byteNullableTest,
        ShortNullableTest = _shortNullableTest,
        UShortNullableTest = _uShortNullableTest,
        IntNullableTest = _intNullableTest,
        UIntNullableTest = _uIntNullableTest,
        LongNullableTest = _longNullableTest,
        ULongNullableTest = _uLongNullableTest,
        FloatNullableTest = _floatNullableTest,
        DoubleNullableTest = _doubleNullableTest,
        DecimalNullableTest = _decimalNullableTest,
        BoolNullableTest = _boolNullableTest,
        CharNullableTest = _charNullableTest,
        DateTimeNullableTest = _dateTimeNullableTest,
        StringArrayTest = _stringArrayTest,
        SByteArrayTest = _sByteArrayTest,
        ByteArrayTest = _byteArrayTest,
        ShortArrayTest = _shortArrayTest,
        UShortArrayTest = _uShortArrayTest,
        IntArrayTest = _intArrayTest,
        UIntArrayTest = _uIntArrayTest,
        LongArrayTest = _longArrayTest,
        ULongArrayTest = _uLongArrayTest,
        FloatArrayTest = _floatArrayTest,
        DoubleArrayTest = _doubleArrayTest,
        DecimalArrayTest = _decimalArrayTest,
        BoolArrayTest = _boolArrayTest,
        BoolArrayNullableTest = _boolArrayNullableTest,
        CharArrayTest = _charArrayTest,
        CharArrayNullableTest = _charArrayNullableTest,
        DateTimeArrayTest = _dateTimeArrayTest,
        SomeTypeTest = _someTypeTest,
        SomeTypeNullableTest = _someTypeNullableTest,
        SomeTypeArrayTest = _someTypeArrayTest
      };

    public TestModelBuilder WithStringTest(string value)
    {
      _stringTest = value;
      return this;
    }

    public TestModelBuilder WithSByteTest(sbyte value)
    {
      _sByteTest = value;
      return this;
    }

    public TestModelBuilder WithByteTest(byte value)
    {
      _byteTest = value;
      return this;
    }

    public TestModelBuilder WithShortTest(short value)
    {
      _shortTest = value;
      return this;
    }

    public TestModelBuilder WithUShortTest(ushort value)
    {
      _uShortTest = value;
      return this;
    }

    public TestModelBuilder WithIntTest(int value)
    {
      _intTest = value;
      return this;
    }

    public TestModelBuilder WithUIntTest(uint value)
    {
      _uIntTest = value;
      return this;
    }

    public TestModelBuilder WithLongTest(long value)
    {
      _longTest = value;
      return this;
    }

    public TestModelBuilder WithULongTest(ulong value)
    {
      _uLongTest = value;
      return this;
    }

    public TestModelBuilder WithFloatTest(float value)
    {
      _floatTest = value;
      return this;
    }

    public TestModelBuilder WithDoubleTest(double value)
    {
      _doubleTest = value;
      return this;
    }

    public TestModelBuilder WithDecimalTest(decimal value)
    {
      _decimalTest = value;
      return this;
    }

    public TestModelBuilder WithBoolTest(bool value)
    {
      _boolTest = value;
      return this;
    }

    public TestModelBuilder WithCharTest(char value)
    {
      _charTest = value;
      return this;
    }

    public TestModelBuilder WithDateTimeTest(DateTime value)
    {
      _dateTimeTest = value;
      return this;
    }

    public TestModelBuilder WithSByteNullableTest(sbyte? value)
    {
      _sByteNullableTest = value;
      return this;
    }

    public TestModelBuilder WithByteNullableTest(byte? value)
    {
      _byteNullableTest = value;
      return this;
    }

    public TestModelBuilder WithShortNullableTest(short? value)
    {
      _shortNullableTest = value;
      return this;
    }

    public TestModelBuilder WithUShortNullableTest(ushort? value)
    {
      _uShortNullableTest = value;
      return this;
    }

    public TestModelBuilder WithIntNullableTest(int? value)
    {
      _intNullableTest = value;
      return this;
    }

    public TestModelBuilder WithUIntNullableTest(uint? value)
    {
      _uIntNullableTest = value;
      return this;
    }

    public TestModelBuilder WithLongNullableTest(long? value)
    {
      _longNullableTest = value;
      return this;
    }

    public TestModelBuilder WithULongNullableTest(ulong? value)
    {
      _uLongNullableTest = value;
      return this;
    }

    public TestModelBuilder WithFloatNullableTest(float? value)
    {
      _floatNullableTest = value;
      return this;
    }

    public TestModelBuilder WithDoubleNullableTest(double? value)
    {
      _doubleNullableTest = value;
      return this;
    }

    public TestModelBuilder WithDecimalNullableTest(decimal? value)
    {
      _decimalNullableTest = value;
      return this;
    }

    public TestModelBuilder WithBoolNullableTest(bool? value)
    {
      _boolNullableTest = value;
      return this;
    }

    public TestModelBuilder WithCharNullableTest(char? value)
    {
      _charNullableTest = value;
      return this;
    }

    public TestModelBuilder WithDateTimeNullableTest(DateTime? value)
    {
      _dateTimeNullableTest = value;
      return this;
    }

    public TestModelBuilder WithStringArrayTest(string[] value)
    {
      _stringArrayTest = value;
      return this;
    }

    public TestModelBuilder WithSByteArrayTest(sbyte[] value)
    {
      _sByteArrayTest = value;
      return this;
    }

    public TestModelBuilder WithByteArrayTest(byte[] value)
    {
      _byteArrayTest = value;
      return this;
    }

    public TestModelBuilder WithShortArrayTest(short[] value)
    {
      _shortArrayTest = value;
      return this;
    }

    public TestModelBuilder WithUShortArrayTest(ushort[] value)
    {
      _uShortArrayTest = value;
      return this;
    }

    public TestModelBuilder WithIntArrayTest(int[] value)
    {
      _intArrayTest = value;
      return this;
    }

    public TestModelBuilder WithUIntArrayTest(uint[] value)
    {
      _uIntArrayTest = value;
      return this;
    }

    public TestModelBuilder WithLongArrayTest(long[] value)
    {
      _longArrayTest = value;
      return this;
    }

    public TestModelBuilder WithULongArrayTest(ulong[] value)
    {
      _uLongArrayTest = value;
      return this;
    }

    public TestModelBuilder WithFloatArrayTest(float[] value)
    {
      _floatArrayTest = value;
      return this;
    }

    public TestModelBuilder WithDoubleArrayTest(double[] value)
    {
      _doubleArrayTest = value;
      return this;
    }

    public TestModelBuilder WithDecimalArrayTest(decimal[] value)
    {
      _decimalArrayTest = value;
      return this;
    }

    public TestModelBuilder WithBoolArrayTest(bool[] value)
    {
      _boolArrayTest = value;
      return this;
    }

    public TestModelBuilder WithBoolArrayNullableTest(bool?[] value)
    {
      _boolArrayNullableTest = value;
      return this;
    }

    public TestModelBuilder WithCharArrayTest(char[] value)
    {
      _charArrayTest = value;
      return this;
    }

    public TestModelBuilder WithCharArrayNullableTest(char?[] value)
    {
      _charArrayNullableTest = value;
      return this;
    }

    public TestModelBuilder WithDateTimeArrayTest(DateTime[] value)
    {
      _dateTimeArrayTest = value;
      return this;
    }

    public TestModelBuilder WithSomeTypeTest(SomeType value)
    {
      _someTypeTest = value;
      return this;
    }

    public TestModelBuilder WithSomeTypeNullableTest(SomeType? value)
    {
      _someTypeNullableTest = value;
      return this;
    }

    public TestModelBuilder WithSomeTypeArrayTest(SomeType[] value)
    {
      _someTypeArrayTest = value;
      return this;
    }
  }
}
