using System;

namespace Test
{
    public class TestModel
    {
        public string StringTest { get; set; }
        public sbyte SByteTest { get; set; }
        public byte ByteTest { get; set; }
        public short ShortTest { get; set; }
        public ushort UShortTest { get; set; }
        public int IntTest { get; set; }
        public uint UIntTest { get; set; }
        public long LongTest { get; set; }
        public ulong ULongTest { get; set; }
        public float FloatTest { get; set; }
        public double DoubleTest { get; set; }
        public decimal DecimalTest { get; set; }
        public bool BoolTest { get; set; }
        public char CharTest { get; set; }
        public DateTime DateTimeTest { get; set; }
        public Guid GuidTest { get; set; }
        public sbyte? SByteNullableTest { get; set; }
        public byte? ByteNullableTest { get; set; }
        public short? ShortNullableTest { get; set; }
        public ushort? UShortNullableTest { get; set; }
        public int? IntNullableTest { get; set; }
        public uint? UIntNullableTest { get; set; }
        public long? LongNullableTest { get; set; }
        public ulong? ULongNullableTest { get; set; }
        public float? FloatNullableTest { get; set; }
        public double? DoubleNullableTest { get; set; }
        public decimal? DecimalNullableTest { get; set; }
        public bool? BoolNullableTest { get; set; }
        public char? CharNullableTest { get; set; }
        public DateTime? DateTimeNullableTest { get; set; }
        public string[] StringArrayTest { get; set; }
        public sbyte[] SByteArrayTest { get; set; }
        public byte[] ByteArrayTest { get; set; }
        public short[] ShortArrayTest { get; set; }
        public ushort[] UShortArrayTest { get; set; }
        public int[] IntArrayTest { get; set; }
        public uint[] UIntArrayTest { get; set; }
        public long[] LongArrayTest { get; set; }
        public ulong[] ULongArrayTest { get; set; }
        public float[] FloatArrayTest { get; set; }
        public double[] DoubleArrayTest { get; set; }
        public decimal[] DecimalArrayTest { get; set; }
        public bool[] BoolArrayTest { get; set; }
        public bool?[] BoolArrayNullableTest { get; set; }
        public char[] CharArrayTest { get; set; }
        public char?[] CharArrayNullableTest { get; set; }
        public DateTime[] DateTimeArrayTest { get; set; }
        public SomeType SomeTypeTest { get; set; }
        public SomeType? SomeTypeNullableTest { get; set; }
        public SomeType[] SomeTypeArrayTest { get; set; }
        public virtual IList<SomeType> ListTest { get; set; } = new List<SomeType>();
    }
}
