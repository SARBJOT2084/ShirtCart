import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Montserrat_700Bold, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Feather';
const data = [{
  id: 1,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImnovnyEL_Hu4FuOoqZUyTsLkCNUgT_ZckA&usqp=CAU',
  brand: 'Vanhuesen',
  des: 'Men s fit T-shirt',
  price: '5,990',
}, {
  id: 2,
  img: 'data:image/jpeg;base64,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',
  brand: 'Allen Solly',
  des: 'Women T-shirt',
  price: '5,990',
}, {
  id: 3,
  img: 'data:image/jpeg;base64,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',
  brand: 'Adidas',
  des: 'Men Regular Fit T-shirt',
  price: '5,990',
}
  , {
  id: 4,
  img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExQVFRMVGBMWFxgYFRcXFRsXHRUYHxgYFxoYHiggGBslGxgVIjEiJikrLi4uGh8zODMsNygtLisBCgoKDg0OGxAQGy0lHSArKystLSsrKy0tKy0tLS0tKy0tLSstLSstLS0tLS0tLS0tLS0rLTctLS0rNzctLSsrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABHEAACAQIDBAcEBgcECwEAAAAAAQIDEQQSIQUxQVEGEyJhcYGRBzKhsUJScpLB0RQVI2KCovAzc7LhNUNTY3SDk6Oz4vEk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAP/xAAeEQEAAgIDAQEBAAAAAAAAAAAAAQIDERIhMTIiQf/aAAwDAQACEQMRAD8A7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV/GdN9nUqvUVMXRjVu04ua0fKTWkH3NoCwAj8NtzDVJOFPEUZzVk4xqwlJNvRNJ3W5+hIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwONe2Hp1iKdd7PwknTUYwdepFyVS8tVTg17qyuLbWrzW0tryGMF71ScVv7NnmV12Xyd99+4uu1NnSx+18es9kqs03bXLC0Ipd9tCbxXsmpzpWp1WppKzkrrwfFIcojp6VxzMbcsl1bV4KHfmiotWSvZXaaf57jsXsS6c1as/1fiZOTjByoTk+3aNs1KT+lZap77Jp8Co7S9mEqUcyxClJa2yWV+PE1vZpSqUtt4WLtmzVU+WV0Kl/gItE+Jak19fpsBAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAwOH1qXU7ax+ISl1HZbtCTcpScVLKlvtUhVuWnY/S7C15dVSk3Us3lcJRem/VqztdbmSvSPDZcUqjXZmlF8r20Xjo/vemGNGEXFxUU7vXS+56XZ5Wnt2Y4jjGlT270vwmadNSlKSco6RbWZb1d2RR+h+NdDbGHxFROUVJ7t/7WE6a9HNu3KLOh4KhSnhu3CNlKa4a2k+W/gQXRLY8sVtaFSNN9RSblOWV9X2dYwvazedR0vfW/DW1lMsddu6o+hA9HIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8cktXuQER0so5sLUt70cso/aUk1+XmUTE13Wpe4qlO93HLNyi7W3RV771dF4xe0oVp/o0GnmjPNJapWjolzd7PwTKJtvZ2JoTc6DUZN9uL1Tf1lyv8A1xMXjvt74bajSv1qv6Nh+rUVThd5Y3lfXjqrq/J3Oj+ymmlsyjJLWcq85d766av6JLyOMbWp4mrP9rd25Xfkkt92dH6Gbcez4QwmKT6q141IrN1c5Sk5052+im9JK+t76WtaV34ZrOngxYfEQnFShKMovc4tNeqMpp4AAAAAAAAAAAAAAAAAAAAAAAAAAAERtvb9PDuMXGU5yV1GKW7m22rLf6Euc927XzYqq73ScYruypXS7s2b1N0rykblbpPiZ+5GnTXnOXq7L4EVjq05q9SUqsvoxlK0L8OyuzHXjY9RZ6aOiKxCM2wbwrUpbnmUbJ6dpW38d/wLdtqlSdP9ppwi1bNm4KN99+W7nzKLUxPVuFR7oVKMn9nroZn6XLltrZFOpmqzcnOEW6cs2kLa9mPu6tK7er3XtZLxyx2sTpWsDhqEKqVRpV5f2SllSemrhq+3v+Nr8PPSDZsUop73d9y1/wDpp7CwSxO0lOrFNUsPTm00vfb0TjruvfxhEl+lzSkoJt2Sk762vpb0TeuvaLT8zxhLWm09oLZ2enddqFvdalaVuXZ4ctSbw/SLEQ3yjUX7y19Y2+NyIrz7UPszfo4JfNmOrOyZ6zWJRddldKadapGk4yhUnfLezi7K7Se+9k3u4MnzkGysfl2hgd1pVKq+9TlBfzXOvnPeup6WAAGFAAAAAAAAAAAAAAAAAAAAAA5bGqpSlJbpTnJa8JSb3+Zf+kmJdPDVZJ2llyp8U5NRTXfqc5wsLKy4fA9sUf1JblCV15fEzEZhK6bl3Sa/H8SQie40duythq8vq05y+6rv5FwobQzYJ/WWWD8Lq38vyZV8TQU4zpy92cZQl9mUWn8Gxs2tJUYq+toxmv3oXXweb1Zi9dj1gKkqO2KclpTrUnSnyVqblF+sEZdqV+slOb+nLTuSvZelj3tCCk6c+K1XO6NHGS1ivFvw7/QVr3seJT7TfKEI+fab+DgamNxKVo8X8uJ4qT0cnvl2vyXikkvIru1MU0qkk9VF2t8F62NIy46vlrYWa3xeGqLxc1NfM/QR+fOl9DJPs6NQp5f4YpL0sjveAr9ZTp1PrwhP70U/xOfJ6sNgAHmoAAAAAAAAAAAAAAAAAAAAAqvT7E2p06f1puT8Ir85RKjeybfDcv64kt0vxWfFOPClGMV4tZpP4peRAYipdN6qKT36X7zpxxqqSiNjY9fpNSk/pRzr+GVmvScfQtNKXoQPR/Yd8I8fLfVrqNN8VTjGcW/OppblFErSbtu1W/8ArkarOxu1DXpaTlHhK018pJeaT/iMlGqpaceXExV9HGX1XZ+DsvnlfkUe41cz0d7aLuXPz3+hp4uacvH/AArh5uy8Mxtyioxk9I6avktbt93vepA4nF2TqPTNqk9+X6Ct4avvkwj1jK6d77l+BWsXUzVKcPr1KUV95N/ypkq4ycXOWi4XIHDSzY7DR4Zpy80rL5sxaSFp6YU817b4KMv4Wtfl8DrXQytnwGElvfUUU/FQSfxTOZbfh9JLWyXkXj2W11LZ8I3v1c60PBdY5RX3ZR+BjLCwtwAPFQAAAAAAAAAAAAAAAAAAD42fTHXtllfdZ38Lagcp2hi51q1SrCmnCc5NOUsrcd0XlSelkt+vcQu3sa5uOEpZVWqyhTbvmUXKSSTa72r9xuS2VRqxvUpU56WTnTTml3uX4WPHQXobS/WNKpCclCjmq9W0rO1oxtx0lJS8u9HTO4hHQds7Jhh9mRw8G3GjGhBN721OKzPvbbb8So0IfTjo90lwfd3M6B0tt+i1L/7v16yNvjYotNWldbnvM4vCXp04z1V1LnxPFW9rS32autzXdyfcbGVHrTju7z2Fd2jjs9qVs3uyqxjrd76dHxatKXBR3+8jx+gqP7bEdub3QjuvwSXE3sLg1CU5aayfDXV6t+On9WSzSfG2pmIELjsNOa6yvJU4LdCOrS8eZBbNw2bFUa8VamqlWlbe1lpRlq+Lakie2zhHVcVKbjHW67+H4m7sujTjgpRp2bhjKdm/rSw7T+C+BmyM+3f7GbSu0l8WiX9jeJWXFUXpJTp1bcLThl0/6ZoywUn9Nu+lmk4+m+xt+zaMaWOxNJNPNSjJ24OM1deXWEyx0sOlgA51AAAAAAAAAAAAAAAAAAAPklofQwOQbOd6cVvskiY6Iu20ILnQrp/fpP8AAjZ0FTq1aSfuVJx+N16ppmfo5Ucdo4e7bc+ti7Lsxj1M2o34tyjHXuOm87qi3dOq1qEYXac5xWlr2jeXHvS9Sn0oP6z9Llo6eyTVGHFylK92mrK29fa+BVoU9L3l96T+d0TF8jZg38z7J3MULbkZY7z1GpVllm+WnyMVR2fcYVVzdr60qln3Z2o/ypM9t3VmEReNd9W3x00a3tfmeejlVdXioN6qWFrxv+7VyT+FSJi2jQu/emtNydl8r/E3egmDcquLpK7dTCVXG7b7UZxyb+9o87kJyq246PK3pfj5d5k6EZaePjThG0XRrJvi3mpu/wDK/Uw4eaaT4209Dx0Q2nS/WlKnF5s1OvDNwz9mdo87Rpy9S5PlXVQAcqgAAAAAAAAAAAAAAAAAAAADl23qeXG4iMbN5oza3O0opp671fMr801wPuzJqOKw83olUivvJxXxkja9oFJQxcaraSdJXb0tllLM23uTi43+yQmJrylTzUoObWWUbtQvZ3TV9bO3FI9+URTsisz4svTGu54jKterjFeb7T+GX0IinU7tD5tycp4t1Kcnlb7V4vLKFtElo1KLfonvufXU0vou9s3TXHomNesraRp7ZxnUUKlVe9GLy983pBecnE2INb73fP8AIqXTvHNzpYaF7pqpUtwf+rTd+TlK2u+L4FtOoRKYOUFSUIO6pKFNvK1FuMEnlbVpWtZtcjYUuJr4NJUYKyirZYq/Ff5J6d4hUtoWPEYsbTuZeguKybVox4VIVqb+5n+cEeMRO64Gr0YnbaeFnx63L5ShJfiZv4QslLD5c1NP3HKn45W1fXnb0MHRujTpbQw6jFZnJxvb3V1c3lXK9kbtSnlnU5qc0/KcjU2TD/8AfheXWt+fVVBb5V1kAHKoAAAAAAAAAAAAAAAAAAAAAr3SzofQx+RVpVY5Gmurko7pKWt077vysUjbmDlg62SbbpSu6U3xV9Yy7038U+J1g0NtbJp4mlKlVXZeqa96MuEovg1+LW5mbRuG8d+MuXtylG8LZ1rG/uvufJb1dbu83cBXVSCkk1fenvUtzTtxT0InFUamFrzw0u1KDVrN2lF2cWuKb5Pd2tXa7iukGzKr/a052qtWnlWW6S0Stq7d50Yo40MluVtpfpDt+nhk1dTrcI8I/vTt8t77lqUnZ1SVarmd3duUm97k97feaVLASvZp3LVsHAZbNo1ubS80lXpybpqP0XdeV7/DTzPlWNn/AFzN6UbWfK/rYh9szqU25Qjni9Wtbp6O6/I9EZ503wNHD1HSxeGqcsRh7/Z62Kk/Rs94SpXqRvaMFwzJyb8k1Y1MXSqPJaoutc6ai7Wgp51l05Xs3qZtO4WIW7pNXxlPEYhQw8HTUpSjJzUpTzLNG0M0cqu7b29OJo9C8TWr43C9ZBU5qpVk42atCFJqUtW2+1JR3cU76k5i8Rnc5N722/F6+h69l1S+KxaaV1Cjbmu3VvG/L3fQ5Iy2mdOi+KK13/XSQAV4AAAAAAAAAAAAAAAAAAAAAAAAOY9N4NY9tO2aEOC1snpfg/8APkaEY3WpLdO6d8W0/wDZ0mvWf5EPGeh008Rr1cDC9zy5xit5h2rF6NPdch6tKpvvc0JinjIv3nyfOya0ubsJRkuy0/Mq2ExOSqoSpupmi5NL3kk1Zrnv3Fjw9ChUV6b3b4u6lHxi9USJGdxsQeKoZsRRS0XW05Lylf5xJypQyrRvzd/mRMsS6dWFRSpwcZO86kXKEU4tN2TV3y1WrQv8tU+oWjH5KGE663an10p6+9aTjHThpFrQ3/ZdgGpV6zvmWSg+TnFZ6j79ZxXkyMo7LxeM6hKk/wBHpqlKM6sox6xRScJPJvzb3aPF7rnQOjuyFhaEaSeaV5TnN6OVSTcpy7tW7LlY4qx298l/zpJgA25wAAAAAAAAAAAAAAAAAAAAAAAFC9oMLYik/rU5L7sv/ZlZ3Fo9pStPDy/vF5Xh+ZVZM6Mc/lGttB6eZDYjFtPLwJTGveV3Gy1b4o3Mjf2RhZrE0cRLWFelXjDudKtGM79+5lrdKMrNrVbpLSS8GtUbf6sX6nwVbdKk1Uva7yVpSute+VN/wmrSfDc1v5eK7jNJ3Ax1bpc+/j5lb2y1ZruZZcS1Yq+2dzNz4O49Fo2weFXKhQ/8USUI7o5G2Ew65UaK/wC3EkTjUAAAAAAAAAAAAAAAAAAAAAAAAAAFH9pu6j/zvlAqM/wAOjF8o0cXuK3j98vB/IA1I7TV/wBDQ/4XD/4KZUKO6Hh+ABnF5KmI3FW219L+voo+g9J8R3zZX9jS/u6f+FG0AcagAAAAAAAAAAAAD//Z',
  brand: 'Raymond',
  des: 'Men Wool Bend',
  price: '5,990',
}
]
function Box({ props }) {
  return (
    <View className="w-full border-b-2 border-b-gray-300  h-44 flex flex-row space-x-8 mb-5 ">
      <View className="h-40">

        <Image source={{ uri: props.img }} resizeMode="contain" className="h-40 w-40" />
      </View>
      <View>
        <View className="mb-auto">
          <Text className="font-bold">{props.brand}</Text>
          <Text className="text-xs " style={{ fontFamily: 'Roboto_400Regular', }}>{props.des}</Text>
        </View>
        <View className="my-auto w-full">
          <Text>4.5 ratings</Text>
          <View className="flex flex-row space-x-3">
            <View>
              <Icon2 name="star" size={21} style={{ color: "#FFC300", }} />

            </View>
            <View>
              <Icon2 name="star" size={21} style={{ color: "#FFC300", }} />

            </View>
            <View>
              <Icon2 name="star" size={21} style={{ color: "#FFC300", }} />

            </View>
            <View>
              <Icon2 name="star" size={21} style={{ color: "#FFC300", }} />

            </View>
            <View>
              <Icon2 name="star-half" size={21} style={{ color: "#FFC300", }} />
            </View>
          </View>
        </View>
        <View className="mt-auto w-full">
          <Pressable style={{ backgroundColor: 'black', borderRadius: 5, height: 30, }}>
            <Text className="text-white mx-auto my-auto">Add to Cart</Text>
          </Pressable>

        </View>
        <View className="mt-auto w-full mb-2">
          <Pressable style={{ backgroundColor: '#E5E7EB', borderRadius: 5, height: 30, }}>
            <Text className="mx-auto my-auto">Remove </Text>
          </Pressable>

        </View>
      </View>
    </View>
  )
}
const Wishlist = () => {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular, Montserrat_700Bold, Montserrat_400Regular, Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View className="h-[10%] mx-10 mt-[15%] flex flex-row">
        <View className="mr-auto"><Icon name="arrow-left" size={25} /></View>
        <View className="ml-auto space-x-2 flex flex-row"><Icon name="bell" size={25} /><Icon name="search" size={25} /><Icon1 name="bag" size={25} /></View>
      </View>
      <View className=" px-5 mb-[10%] border-b-black-2 fixed">
        <View className="mr-auto">
          <Text className="text-xl" style={{ fontFamily: 'Pacifico_400Regular' }} >
            Your Wishlist&nbsp;&nbsp; ❤️
          </Text>
          <View className="w-full  flex flex-row justify-center mt-[15%]">
            <View className="bg-black w-32 h-10 rounded-l-lg"><Text className="text-white mx-auto my-auto" style={{ fontFamily: 'Montserrat_400Regular' }}>All</Text></View>
            <View className="bg-gray-200 w-32 h-10 rounded-r-lg"><Text className="mx-auto my-auto" style={{ fontFamily: 'Montserrat_400Regular' }}>Suggested</Text></View>
          </View>

        </View>

      </View>

      <FlatList className="h-[62%]" data={data} renderItem={({ item }) => <Box props={item} />} showsVerticalScrollIndicator={false} />




    </View>

  )
}
export default Wishlist