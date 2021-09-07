using System;
using System.Collections.Generic;

namespace Pando.Api.Extensions
{
    public static class DecimalExtensions
	{
		// conversion code courtesy https://social.technet.microsoft.com/wiki/contents/articles/19055.net-convert-system-decimal-to-and-from-byte-arrays.aspx

		/// <summary>
		/// Convert a decimal to a ByteArray.
		/// This is necessary prior to adding it as a binary header.
		/// </summary>
		/// <param name="val"></param>
		/// <returns></returns>
		public static byte[] ToByteArray(this decimal val)
		{
			Int32[] bits = decimal.GetBits(val);
			List<byte> bytes = new List<byte>();
			foreach (Int32 i in bits)
			{
				bytes.AddRange(BitConverter.GetBytes(i));
			}
			return bytes.ToArray();
		}

		/// <summary>
		/// Convert a ByteArray to a decimal.
		/// This is used to deserialize a binary header containing a decimal value.
		/// </summary>
		/// <param name="bytes"></param>
		/// <returns></returns>
		public static decimal ToDecimal(this byte[] bytes)
		{
			//check that it is even possible to convert the array
			if (bytes.Length != 16)
				throw new Exception("A decimal must be created from exactly 16 bytes");
			//make an array to convert back to int32's
			Int32[] bits = new Int32[4];
			for (int i = 0; i <= 15; i += 4)
			{
				//convert every 4 bytes into an int32
				bits[i / 4] = BitConverter.ToInt32(bytes, i);
			}
			//Use the decimal's new constructor to
			//create an instance of decimal
			return new decimal(bits);
		}
	}
}
